# CraftedTreasures
# Frontend Part made using Angular 

# Backend using Spring Boot Link : https://github.com/bhaskarvora/CraftedTreasures

## Overview

CraftedTreasures is an innovative project designed to showcase and promote handcrafted treasures from artisans around the world. The project aims to create a vibrant online marketplace that connects skilled crafters with enthusiasts who appreciate unique, artisanal products.

This is a comprehensive application built using Spring Boot. It includes features for user authentication, product management, cart management, and order processing. The application utilizes JWT for secure authentication and integrates with Razorpay for handling payments.
## Features

- **HandMade Items  Management**: Add, view, and manage products with detailed information.
- **User Authentication**: Secure login and registration with role-based access.
- **Drag-and-Drop**: Support for file uploads via drag-and-drop functionality.
- **Image Processing**: Handle image conversion and URL creation.
- **Payment Integration**: Razorpay integration for secure payments.
- **Responsive Design**: Built with Angular Material and Bootstrap for a responsive UI.


## Configuration

- **API Endpoints**: Configure API endpoints in `src/environments/environment.ts`.
- **Material Theme**: Customize Angular Material themes in `src/styles.scss`.
- **Razorpay Integration**: Ensure the Razorpay script is included in `index.html`.


- app.module.ts:
- Purpose: Defines the main module for your Angular application.

- Component Tests (.spec.ts files):
- Purpose: Contains unit tests for Angular components, services, and directives.
- Key Features: Uses Angular’s testing utilities to create instances of services, components, and directives, and verifies their behavior using Jasmine.
## Directives:
drag.directive.ts: Implements a directive for handling drag-and-drop operations. It updates the background color on drag events and emits a FileHandle when a file is dropped.
## Services:
image-processing.service.ts: Handles image processing tasks, including converting image data to File objects and generating secure URLs for image files.
product-resolve.service.ts: Resolves product data before routing, using a product service and image processing service to handle product details.
## Main Files:
index.html: The main HTML file that loads the Angular application.
main.ts: Entry point for bootstrapping the Angular application.
test.ts: Configures the Angular testing environment for Karma.
package.json:
- Dependencies: Lists the libraries and frameworks used, including Angular, Angular Material, Bootstrap, and Razorpay.
DevDependencies: Lists development tools for testing, linting, and building the application.
Tips and Recommendations
Testing:
Ensure that your unit tests are comprehensive and cover different scenarios for your services, components, and directives.
Use TestBed.configureTestingModule to set up the testing environment and inject necessary dependencies.
Drag-and-Drop Directive:
Ensure that the DragDirective is used in the appropriate components and that the file handling logic is robust.
Verify that the files event is correctly emitted and handled in the components where the directive is used.
- Image Processing:
Check that the ImageProcessingService correctly handles various image formats and edge cases.
Ensure that dataURItoBlob and image URL creation work as expected.
- Product Resolver:
Confirm that the ProductResolveService is correctly fetching and processing product data before navigation.
Handle cases where no product ID is provided by returning default product details.
- Dependencies:
Keep your dependencies up-to-date to avoid security vulnerabilities and take advantage of new features.
Regularly review and clean up unused dependencies.
Angular Material:
Make sure that all Material components are correctly imported and used in your application.
Follow best practices for Angular Material theming and styling.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Screenshots

![Home Page Crafted](https://github.com/user-attachments/assets/c8cef9fa-c762-4a69-9747-4781c6f81d87)
Home Page User Side

![Screenshot 2024-09-09 192846](https://github.com/user-attachments/assets/1e9100be-121f-41aa-9f80-17ce871c83d2)
Home Page Admin Panel

![Cart Page Crafted](https://github.com/user-attachments/assets/7a6062da-16f2-4378-9757-e9ac737ad62f)
Cart Page 

![Checkout Page Crafted](https://github.com/user-attachments/assets/b557b42b-ee5e-40b5-b6f4-3a63c9087c91)
Checkout Page 

![Search Filter Crafted](https://github.com/user-attachments/assets/b8f6e8d4-7a42-438b-a7c6-5b40ec61b467)
Search Filter 

![Database db for Crafted ](https://github.com/user-attachments/assets/6516f044-4474-4c18-b561-429e4dde6353)
Database db

![Add HandMade Items](https://github.com/user-attachments/assets/1dce92bc-37e4-4218-9ce9-e0b3020b79ae)
Add Handmade Items 

![Show Ptoduct Details Crafted](https://github.com/user-attachments/assets/8fd38dd8-7a1a-4f9c-b117-ec6c65281b90)
Show Product Details 


![Order Information All](https://github.com/user-attachments/assets/43548b3e-75fe-4994-8ace-21db6670a315)
Order Information All

![Order Information Filter Placed](https://github.com/user-attachments/assets/1f8f8b61-21f2-43f6-9f7a-828955687fef)
Order Information Filter Placed 

![Order Information  Delivered Filter](https://github.com/user-attachments/assets/6cf29e1c-e4d2-43fb-b228-264f048c9e47)
Order Information Filter Delivered

![OrderConfirmation Page Crafted](https://github.com/user-attachments/assets/a1a7b1da-9f87-4df6-962f-699ffdc343c5)
Order Confirmation Page 

![Razorpay Payment Integration](https://github.com/user-attachments/assets/179d8775-48b6-400f-ad9a-6b568c2281b0)

Razorpay Payment Integration

![Payment Integration Crafted](https://github.com/user-attachments/assets/90f95d99-ff8a-4a59-8268-8719e055e4dd)

Payment Integration



