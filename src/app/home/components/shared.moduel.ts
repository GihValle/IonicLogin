import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ButtonComponent } from "src/app/button/button.component";
import { IconButtonComponent } from "src/app/icon-button/icon-button.component";
import { InputComponent } from "src/app/input/input.component";

@NgModule(
    {
        declarations:[InputComponent, ButtonComponent, IconButtonComponent],
        imports:[CommonModule, IonicModule],
        exports:[InputComponent,  ButtonComponent, IconButtonComponent],
        providers:[],
    }
)

export class SharedModule{}