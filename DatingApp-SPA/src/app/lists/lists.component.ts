import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
users:User[];
likesParam:string;
pagination:Pagination;
  constructor(private authService:AuthService,private userService:UserService,private route:ActivatedRoute, private alertify:AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.users=data['users'].result;
      console.log(this.users=data['users'].result);
    });
    
  }
  loadUsers()
{
  this.userService.getUsers(this.pagination.currentPage=1, this.pagination.itemsPerPage,null,this.likesParam).subscribe((res:PaginatedResult<User[]>)=>{
    this.users=res.result;
    this.pagination=res.pagination;
  },error=>{
    this.alertify.error(error);
  });

}

pageChanged(event: any): void {
  this.pagination.currentPage = event.page;
  this.loadUsers();
}
}
