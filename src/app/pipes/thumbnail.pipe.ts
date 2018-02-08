import {Pipe, PipeTransform} from '@angular/core';
import {MediaService} from '../services/media.service';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {

  valueArray: any;

  constructor(private mediaService: MediaService) {
  }

  transform(value: any, args?: any): any {
    // let koko string
    // jaa split funktiolla tiedoston nimi (value) osiin
    // tallenna tulos nimellä temp

    let koko: string;

      console.log(value);
      const temp = value.split('.');

      // switch/case
      // args small -> koko = 160
      // args medium -> koko = 320
      // args large -> koko = 640
      // return temp[0] + '-tn' + koko +'.png';

      switch (args) {
        case 'small': {
          koko = '160';
          break;
        }
        case 'medium': {
          koko = '320';
          break;
        }
        case 'large': {
          koko = '640';
          break;
        }
      }
      return temp[0] + '-tn' + koko + '.png';

    }

  }


