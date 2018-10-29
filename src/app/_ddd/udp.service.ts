import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { AddressInfoDto } from './udp/AddressInfoDto';
/**
 * 电子笔UDP通信服务
 */
@Injectable()
export class UdpService {
  server: any;
  constructor() {
    this.server = window.require('dgram').createSocket('udp4');
  }
  error(): void {
    this.server.on('error', (err: Error) => {
      console.error(`server error:\n${err.stack}`);
      this.server.close();
    });
  }

  message(): void {
    this.server.on('message', (msg: Buffer, rinfo: AddressInfoDto) => {
      console.log(`server got:${msg} from ${rinfo.address}:${rinfo.port}`);
    });
  }

  listening(): void {
    let address: AddressInfoDto = this.server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  }

  bind(prot?: number): void {
    this.server.bind(prot);
  }
}
