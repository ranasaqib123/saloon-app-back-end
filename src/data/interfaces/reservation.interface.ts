import {Document} from 'mongoose'
export interface IReservation extends Document{
  code:number,
  noOfPerson:number,
  time:string,
  discount:number
}