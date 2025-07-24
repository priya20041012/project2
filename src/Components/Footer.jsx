import React from 'react'

const Footer = () => {
  return (
<footer className="p-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Company Name</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Here you can use rows and coloumns to organize your footer content.lorem ipsum dolor sit amet,consectetur adipisicing elit.</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Utility-First</a>
				<a rel="noopener noreferrer" href="#">Responsive Design</a>
				<a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
				<a rel="noopener noreferrer" href="#">Dark Mode</a>
				<a rel="noopener noreferrer" href="#">Adding Base Styles</a>
				<a rel="noopener noreferrer" href="#">Extracting Components</a>
				<a rel="noopener noreferrer" href="#">Adding New Utilities</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Product</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">React</a>
				<a rel="noopener noreferrer" href="#">Angular</a>
				<a rel="noopener noreferrer" href="#">Vue</a>
				<a rel="noopener noreferrer" href="#">Laravel</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Useful links</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Pricing</a>
				<a rel="noopener noreferrer" href="#">Settings</a>
				<a rel="noopener noreferrer" href="#">Orders</a>
				<a rel="noopener noreferrer" href="#">Help</a>
			</div>
		</div>
				<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Contact</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Pricing</a>
				<a rel="noopener noreferrer" href="#">Settings</a>
				<a rel="noopener noreferrer" href="#">Orders</a>
				<a rel="noopener noreferrer" href="#">Help</a>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="dark:text-gray-600">© Copyright 1986. All Rights Reserved.</span>
	</div>
</footer>  )
}

export default Footer