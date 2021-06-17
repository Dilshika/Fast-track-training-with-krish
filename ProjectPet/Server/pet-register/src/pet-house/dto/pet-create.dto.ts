/* eslint-disable prettier/prettier */
import {  IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePetDetails{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    breed:string;

    @IsNotEmpty()
    @IsString()
    color:string;

    @IsNotEmpty()
    @IsNumber()
    age:number;
}