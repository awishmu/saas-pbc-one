'use client'
import React, { useState, FormEvent } from 'react';
import Form from 'next/form';

type CustomFormProps = Omit<
  {
    action: NonNullable<string | ((formData: FormData) => void | Promise<void>)>;
    prefetch?: false;
    replace?: boolean;
    scroll?: boolean;
  } & Omit<HTMLProps<HTMLFormElement>, "action" | "method" | "target">,
  "ref"
>;

export default function Page() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsLoading(true)
		
		try {
			const formData = new FormData(event.currentTarget);
			const formObject = Object.fromEntries(formData);
			console.log('formData:', formObject)
			const response = await fetch('http://localhost:3000/api/save', {
				method: 'POST',
				body: JSON.stringify(formObject),
			})
			if (response.ok) {
				alert("Data saved successfully!");
			 } else {
				alert("Something went wrong!");
			}
			
			// Handle response if neccesary
			const data = await response.json();
			console.log('dataok: ', data)
			// ...
		} catch (error) {
			// Handle error if neccesary
			console.error('error :',error);
		} finally {
			setIsLoading(false) // Set loading to false when the request complete
		}
	}
	
	return (
		<Form onSubmit={onSubmit}>
			<input type="text" name="name" />
			<input type="text" name="email" />
			<button type="submit" disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Submit'}
			</button>
		</Form>
	
	)

}
