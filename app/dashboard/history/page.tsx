"use client"
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import React, { useState } from 'react'
import { TEMPLATE } from '../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { useUser } from "@clerk/nextjs";

export interface HISTORY{
  id:Number,
  formateData:string,
  aiResponse:string,
  templateSlug:string,
  createdBy:string,
  createdAt:string
}

const History = async() => {
 
  // const {user} = useUser();

  // {/*@ts-ignore*/}
  // const HistoryList:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput?.createBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.id));

  // const GetTemplateName = (slug:string) => {
  //   const template:TEMPLATE|any = Templates?.find((item)=>item.form);
  //   return template;
  // }
  

  return (
    <div className='m-2 p-5 border rounded-md bg-white'>
      <h2 className="font-bold">History</h2>
{/* 
      {HistoryList.map((item, index) => (
        <h1>{item.formateData}</h1>
      ))} */}

    </div>
  )
}

export default History