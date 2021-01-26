import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent} from './my-albums/my-albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumDetailsComponent} from './album-details/album-details.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { PhotoDetailsComponent} from './photo-details/photo-details.component';
import { RecentAlbumsComponent} from './recent-albums/recent-albums.component';

const routes: Routes = [
  {path: 'albums/recent',component: RecentAlbumsComponent},
  {path: 'profile/:profileId',component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'albums/me', component: MyAlbumsComponent},
  {path: 'create', component: CreateAlbumComponent},
  {path: 'album/:albumId', component: AlbumDetailsComponent},
  {path: 'upload/:albumId', component: UploadPictureComponent},
  {path: 'photo/photoId',component: PhotoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule{}
