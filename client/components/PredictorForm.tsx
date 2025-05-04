'use client'

import { useState } from 'react'
import ResultCard from './ResultCard'
import { FaInfoCircle } from 'react-icons/fa'

type FormData = {
  age: string
  sex: string
  cp: string
  trestbps: string
  chol: string
  fbs: string
  restecg: string
  thalach: string
  exang: string
  oldpeak: string
  slope: string
  ca: string
  thal: string
}

const FieldWrapper = ({
  label,
  name,
  children,
  tooltip
}: {
  label: string
  name: keyof FormData
  children: React.ReactNode
  tooltip?: string
}) => (
  <div className='flex flex-col'>
    <label className='mb-1 text-sm font-medium text-gray-300' htmlFor={name}>
      {label}
      {tooltip && (
        <span className='ml-1 text-blue-400 cursor-pointer' title={tooltip}>
          <FaInfoCircle className='inline-block' />
        </span>
      )}
    </label>
    {children}
  </div>
)

export default function PredictorForm () {
  const [form, setForm] = useState<FormData>({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  })

  const [result, setResult] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, parseFloat(value)])
    )
  
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      setResult(`${data.prediction}`)
    } catch (error) {
      console.error('Error in prediction:', error)
    }
  }  

  return (
    <div className='bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6'>
      <h2 className='text-3xl font-semibold text-white text-center'>
        Heart Disease Prediction Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'
      >
        <FieldWrapper label='Age' name='age'>
          <input
            type='number'
            name='age'
            value={form.age}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500'
          />
        </FieldWrapper>

        <FieldWrapper label='Sex' name='sex' tooltip='0 = Female, 1 = Male'>
          <select
            name='sex'
            value={form.sex}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={0}>Female</option>
            <option value={1}>Male</option>
          </select>
        </FieldWrapper>

        <FieldWrapper
          label='Chest Pain Type'
          name='cp'
          tooltip='0: Typical Angina, 3: Asymptomatic'
        >
          <select
            name='cp'
            value={form.cp}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={0}>Typical Angina</option>
            <option value={1}>Atypical Angina</option>
            <option value={2}>Non-anginal Pain</option>
            <option value={3}>Asymptomatic</option>
          </select>
        </FieldWrapper>

        <FieldWrapper label='Resting Blood Pressure (mm Hg) (90-200)' name='trestbps'>
          <input
            type='number'
            name='trestbps'
            value={form.trestbps}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          />
        </FieldWrapper>

        <FieldWrapper label='Cholesterol (mg/dl) (100-600)' name='chol'>
          <input
            type='number'
            name='chol'
            value={form.chol}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          />
        </FieldWrapper>

        <FieldWrapper label='Fasting Blood Sugar > 120 mg/dl' name='fbs'>
          <select
            name='fbs'
            value={form.fbs}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </FieldWrapper>

        <FieldWrapper label='Resting ECG Result' name='restecg'>
          <select
            name='restecg'
            value={form.restecg}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={0}>Normal</option>
            <option value={1}>ST-T Wave Abnormality</option>
            <option value={2}>Probable/Definite LVH</option>
          </select>
        </FieldWrapper>

        <FieldWrapper label='Max Heart Rate Achieved (60-220)' name='thalach'>
          <input
            type='number'
            name='thalach'
            value={form.thalach}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          />
        </FieldWrapper>

        <FieldWrapper label='Exercise Induced Angina' name='exang'>
          <select
            name='exang'
            value={form.exang}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </FieldWrapper>

        <FieldWrapper label='Oldpeak (ST Depression) (0-6)' name='oldpeak'>
          <input
            type='number'
            step='0.1'
            name='oldpeak'
            value={form.oldpeak}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          />
        </FieldWrapper>

        <FieldWrapper label='Slope of ST Segment' name='slope'>
          <select
            name='slope'
            value={form.slope}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={0}>Upsloping</option>
            <option value={1}>Flat</option>
            <option value={2}>Downsloping</option>
          </select>
        </FieldWrapper>

        <FieldWrapper
          label='Major Vessels Colored by Fluoroscopy (0–3)'
          name='ca'
        >
          <select
            name='ca'
            value={form.ca}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            {[0, 1, 2, 3].map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </FieldWrapper>

        <FieldWrapper label='Thalassemia' name='thal'>
          <select
            name='thal'
            value={form.thal}
            onChange={handleChange}
            className='bg-gray-800 text-white p-3 rounded-lg'
          >
            <option value=''>Select</option>
            <option value={1}>Normal</option>
            <option value={2}>Fixed Defect</option>
            <option value={3}>Reversible Defect</option>
          </select>
        </FieldWrapper>

        <div className='md:col-span-2 mt-4'>
          <button
            className='w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg shadow'
          >
            Predict Heart Risk
          </button>
        </div>
      </form>

      {result && <ResultCard prediction={`${result}`} />}
    </div>
  )
}
