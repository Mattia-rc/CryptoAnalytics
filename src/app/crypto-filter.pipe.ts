import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cryptoFilter'
})
export class CryptoFilterPipe implements PipeTransform {

  transform(cryptos: any[], searchText: string): any[] {
    if (!cryptos) return [];
    if (!searchText) return cryptos;
    searchText = searchText.toLowerCase();
    return cryptos.filter(crypto => {
      return crypto.name.toLowerCase().includes(searchText);
    });
  }

}