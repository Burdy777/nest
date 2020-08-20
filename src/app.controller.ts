import { Controller, Get, Req, Body, Ip, Post, Header, Param } from '@nestjs/common';
import { AppService } from './services/app.service';
import { Request } from 'express';

@Controller()
export class AppController {}
