import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@NgModule(
    {
        declarations:[InputComponent, ButtonComponent, IconButtonComponent],
        imports:[CommonModule, IonicModule],
        exports: [InputComponent, ButtonComponent, IconButtonComponent],
        providers: [],
    }
)

export class SharedModule{}