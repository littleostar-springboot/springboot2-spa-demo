import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  name: string; // a: dataName: dataType
  @Input()
  hobby: string; // a: dataName: dataType

  @Input()
  flag: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.name = 'Felipe'; // b: this.dataName = 'xxxx';
  }

  ngOnInit() {
    if (this.name) {

    } else {
      this.route.queryParamMap.subscribe(data => {
        if (data) {
          console.log(JSON.stringify(data));
          this.name = data.get('name');
        }
      });
      if (!this.name) {
        this.name = '???';
      }
    }
    if (this.flag) {

    } else {
      this.flag = true;
    }
  }

  clickQueryParams(namePara: string, hobbyPara: string) {
    // console.log(namePara + ' ' + hobbyPara);
    this.router.navigate(['/user-item'], {queryParams: {name: namePara, hobby: hobbyPara}}).catch().finally();
  }

}
