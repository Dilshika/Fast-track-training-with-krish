/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory,Schema} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type PetDocument=Pet & Document;

@Schema()
export class Pet{

    @Prop()
    name:string;

    @Prop()
    breed:string;

    @Prop()
    color:string;

    @Prop()
    age:number;

}

export const PetSchema=SchemaFactory.createForClass(Pet);
