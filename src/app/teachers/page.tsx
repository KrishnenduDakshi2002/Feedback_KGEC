'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getTeacherQuestions } from '../_functions/teacher'
import { Button, Card } from 'antd'
import { Question_T } from '@/types/Question'

const Teacher = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getTeacherQuestions();
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div className={styles.main__container}>
      {
        questions.map((question : Question_T, index) => {
          return (
            <Card key={index} style={{
              width: '100%',
            }}>
              <p>{question.questionText}</p>
            </Card>
          )
        })
      }
      <div style={{
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <Button type="default">Submit</Button>
      </div>
    </div>
    
  )
}

export default Teacher