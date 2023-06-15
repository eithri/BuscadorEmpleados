import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Empleado } from 'src/app/interfaces/Empleado';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  empleados: Empleado[] = [];
  empleadosCopy: Empleado[] = [];
  errors: boolean = false;

  httpOptions = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;charset=utf-8',
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData() {
    this.empleados = JSON.parse(localStorage.getItem('empleados') || '[]');
    if (this.empleados.length == 0) {
      await this.http
        .get<any>(environment.apiUrl + '/', this.httpOptions)
        .subscribe(
          (res) => {
            this.empleados = res.map((r: any) => {
              return {
                id: r.id,
                name: r.name,
                salary: r.salary,
                age: r.age,
                profileImage: r.profileImage,
                annualSalary: r.annualSalary,
              };
            });
            localStorage.setItem("empleados", JSON.stringify(this.empleados));
          },
          (error) => {
            this.errors = true;
          }
        );
    }
    this.empleadosCopy = this.empleados;
  }

  filter(event: any) {
    const search: string = event.target.value;
    this.empleados = this.empleadosCopy?.filter(( {name}: Empleado ) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
