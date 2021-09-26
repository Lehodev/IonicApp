import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { PostPageRoutingModule } from './post-routing.module'

import { PostPageComponent } from './post-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule
  ],
  declarations: [PostPageComponent]
})
export class PostPageModule {}
