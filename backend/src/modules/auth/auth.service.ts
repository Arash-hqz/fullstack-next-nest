import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(email: string, password: string, name?: string) {
    const exist = await this.prisma.user.findUnique({ where: { email } });
    if (exist) throw new BadRequestException('Email already used');
    const hash = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({ data: { email, password: hash, name } });
    return { id: user.id, email: user.email };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return null;
    const { password: _p, ...rest } = user as any;
    return rest;
  }

  async login(email: string, password: string) {
    const u = await this.validateUser(email, password);
    if (!u) throw new BadRequestException('Invalid credentials');
    const token = require('jsonwebtoken').sign({ sub: u.id, role: u.role }, process.env.JWT_SECRET || 'dev', { expiresIn: '1h' });
    return { token, user: u };
  }
}
