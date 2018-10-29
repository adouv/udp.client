import { Injectable } from '@angular/core';
/**
 * 电子笔UDP服务
 */
@Injectable()
export class UdpService {
  UDPService: any;
  constructor() {
    this.UDPService = window.require('dgram').createSocket('udp4');
    console.log(this.UDPService);
  }
}
