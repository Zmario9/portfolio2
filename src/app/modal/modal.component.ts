import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";
import * as myData from '../page-data/page-data.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title: string | null = null;
  src: string | null = null;
  bgColor: string | null = null;
  titleColor: string | null = null;
  path: string | null = null;
  originBtn: string | null = null;
  name: string | null = null;
  desc: Array<string> | null = null;
  gif: string | null = null;
  mdlTxt: string[] = myData.modalTxt;
  constructor(public modalRef: MdbModalRef<ModalComponent>, private route:Router, private scroller: ViewportScroller) {}
  goToContacts() {
    this.modalRef.close();
    setTimeout(()=>{
      this.scroller.scrollToAnchor("contactScroll");
    },100);
  }
}
