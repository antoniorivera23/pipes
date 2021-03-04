import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 nombre: string = 'Spiderman';
 nombre2:string = 'antOn1O riVerA'
 personas = ['Antonio', 'Daniel', 'Marco', 'Polo', 'Roberto', 'Miguel', 'John', 'Carlos', 'Erick', 'Silvestre'];
 PI:number = Math.PI;
 porcentaje: number = 0.234;
 salario  :number = 1234.5;
 fecha    :Date = new Date();
 idioma   :string = 'es';
 videoUrl :string = 'https://www.youtube.com/embed/tkPhHro64dU';
 activar : boolean = true;

 valorPromesa = new Promise<string>( (resolve) =>{
   setTimeout(() => {
     resolve('llego la data');
   }, 4500);
 });

 heroe = {
   nombre: 'Logan',
   clave: 'Wolverine',
   edad: 500,
   direccion: {
     calle: 'Primera',
     casa: 20
   }
 }

}
