import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return (this.http.get(`${this.baseUrl}getallemployees`));
  }

  getEmployeeById(id:any){
    return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountries`));
  }

  addEmpRecord(obj:any){
    return (this.http.post(`${this.baseUrl}addemployee`,obj,{
      responseType:'text'
    }));
  }

  updateEmployee(obj:any){
    return (this.http.put(`${this.baseUrl}updateemployee/${obj.id}`,obj,{
      responseType:'text'
    }));

  }

  deleteEmployee(id:any){
    return (this.http.delete(`${this.baseUrl}delete-employee/${id}`,{
      responseType:'text'
    }));
  }
}
