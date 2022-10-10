import { SchemaFactory } from '@nestjs/mongoose';
import { Page } from '@wiscro/common';
import { Document } from 'mongoose';

export type PageDocument = Page & Document;

// @Schema()
// export class Cat {
//   @Prop()
//   name: string;

//   @Prop()
//   age: number;

//   @Prop()
//   breed: string;
// }

export const PageSchema = SchemaFactory.createForClass(Page);
