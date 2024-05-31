import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoFilterPipe } from '../../app/crypto-filter.pipe';


@NgModule({
  declarations: [
    CryptoFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CryptoFilterPipe
  ]
})
export class PipeModulsModule { }
