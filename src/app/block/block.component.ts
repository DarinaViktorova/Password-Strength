import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
 export class BlockComponent {

  bodyBackgroundColor: string = '';

  blocks: { [key: number]: string } = {
    0: '',
    1: '',
    2: ''
  };

  @Input() strength: string = '';
  @Output() bodyColorChange: EventEmitter<string> = new EventEmitter<string>();

  getColorForStrength(strength: string): void {
    switch (strength) {
      case 'passwordTooShort':
        this.setColors('red', 'red', 'red');
        this.setBodyBackgroundColor('#F5C3DE');
        break;
      case 'weak':
        this.setColors('red', 'gray', 'gray');
        this.setBodyBackgroundColor('#F5C3DE');
        break;
      case 'medium':
        this.setColors('yellow', 'yellow', 'gray');
        this.setBodyBackgroundColor('#FAF8A3');
        break;
      case 'strong':
        this.setColors('green', 'green', 'green');
        this.setBodyBackgroundColor('#BBFA9B');
        break;
      default:
        this.setColors('gray', 'gray', 'gray');
        this.setBodyBackgroundColor('rgb(192, 231, 255)');
        break;
    }
  }

  private setColors(block_0: string, block_1: string, block_2: string): void {
    this.blocks[0] = block_0;
    this.blocks[1] = block_1;
    this.blocks[2] = block_2;
  }

  private setBodyBackgroundColor(color: string): void {
    this.bodyBackgroundColor = color;
    this.bodyColorChange.emit(color);
  }
}
