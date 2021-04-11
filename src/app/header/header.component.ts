import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeTab = "";
  isHam = false;
  isShow = false;
  constructor() {}

  ngOnInit(): void {}

  hamClick() {
    console.log('huss');
    this.isShow = !this.isShow
    this.isHam = !this.isHam;
    // const links = document.querySelector('#mobile')
    // console.log(links);
    // links.classList.toggle('show');
  }

  getActiveTab(tab) {
    this.isShow = !this.isShow
   this.activeTab = tab;

 }}
