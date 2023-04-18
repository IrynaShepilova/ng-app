import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TagsService} from "../../services/tags.service";
import {ITag} from "../../interfaces/tag";
import { FormBuilder, FormGroup,  FormControl, Validators } from "@angular/forms";
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private tagsService: TagsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

    this.form = this.formBuilder.group({
      name: new FormControl("", Validators.required)
    });
  }

  public tags: ITag[] = [];
  public form: FormGroup;
  @ViewChild('nameInput') nameInput: ElementRef | undefined;

  ngOnInit(){
   this.getTags();
  }

  getTags(){
    this.tagsService.getTagsList().subscribe( res => {
      this.tags = res.sort((a, b) => a.id - b.id);
    })
  }

  removeTag(tag: ITag){
    this.tagsService.removeTag(tag).subscribe(res => {
      this.toastr.success('Tag removed' , undefined, {closeButton: true, timeOut: 1000})
      this.getTags();
    }, (err)=>{
      this.toastr.error(`Could not delete tag: ${err.message}`)
    })
  }

  addTag(){
    this.tagsService.addTag(this.form.value['name']).subscribe( () => {
      this.toastr.success('Tag was successfully added', undefined, {closeButton: true, timeOut: 1000});

      this.resetForm();
      this.getTags();
    }, err=> {
      this.toastr.error(`Tag was not added: ${err.message}`)
    })
  }

  resetForm(){
    this.form.reset();
    this.form.controls['name'].setErrors(null)
    this.nameInput && this.nameInput.nativeElement.blur();
  }
}
