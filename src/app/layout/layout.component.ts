import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor() { }

  opened: boolean = true

  toggleDrawer = () => {
    console.log('toogle clicked')
    this.opened = !this.opened
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

}
