import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [];

  @Input()
  onDelete( id: string ): void {
    this.onDeleteCharacter.emit( id );
  }

}
