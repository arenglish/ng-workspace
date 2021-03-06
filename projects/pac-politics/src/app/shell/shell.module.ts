import { NgModule } from "@angular/core";
import { ShellComponent } from "./shell.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ShellRoutingModule } from "./shell-routing.module";
import { MatToolbarModule } from "@angular/material";
import { SharedModule } from "../shared/shared.module";

const MATERIAL_MODULES_FOR_SHELL = [MatToolbarModule];

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ...MATERIAL_MODULES_FOR_SHELL
  ]
})
export class ShellModule {}
