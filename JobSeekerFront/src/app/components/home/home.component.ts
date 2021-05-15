import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs:any[] = [
    {
        title: "Ingeniero de firmware",
        link: "https://www.infojobs.net/massalfassar/ingeniero-firmware/of-i4819a98f704231ac018c09aa46730b",
        city: "Massalfassar",
    }
    ,
    {
        title: "GESTOR DE PROYECTOS OBRA CIVIL",
        link: "https://www.infojobs.net/pontevedra/gestor-proyectos-obra-civil/of-iaf6eb53b6f45ce8d8775dc6a227ae7",
        city: "Pontevedra",
     }
    ,
    {
        title: "Marketing Redes Social y Gestor de Tienda Virtual",
        link: "https://www.infojobs.net/fuenlabrada/marketing-redes-social-gestor-tienda-virtual/of-icca83b42604089a6b9f52eff1c0ebf",
        city: "Fuenlabrada",
    }
    ,
    {
        title: "Front End Developer",
        link: "https://www.infojobs.net/bilbao/front-end-developer/of-i6f1cff84ad4c9581540b6d158ea570",
        city: "Bilbao",
    },
    {
        title: "COMERCIAL APASIONADO, REPRESENTACIÓN ONGs.",
        link: "https://www.infojobs.net/madrid/comercial-apasionado-representacion-ongs./of-i8df847df9f4132973f429a26b6ff3c",
        city: "Madrid",
    },
    {
        title: "Atención al cliente Multinacional Americana/ Imprescindible Noruego",
        link: "https://www.infojobs.net/madrid/atencion-al-cliente-multinacional-americana-imprescindible-noruego/of-ie41563afe14b1dbf49f7e5fdd64eb5",
        city: "Madrid",
    },
    {
        title: "Ingeniero/a Eléctrico ePLAN",
        link: "https://www.infojobs.net/bizkaia/ingeniero-electrico-eplan/of-i0f28e5bb124346ad6e32aa94e03f6f",
        city: "Bizkaia",
    },
    {
        title: "CAPTADOR/AS: Cto Indefinido Sueldo Fijo + Incentivos + Media Jornada",
        link: "https://www.infojobs.net/alicante-alacant/captador-cto-indefinido-sueldo-fijo-incentivos-media-jornada/of-if873fe4b7e48f1a3d63bb500e6ed20",
        city: "Logroño",
    },
    {
        title: "PROMOTOR/A ONG OVIEDO: 1100€ (Fijo + Variable)  Media Jornada",
        link: "https://www.infojobs.net/oviedo/promotor-ong-oviedo-1100-fijo-variable-media-jornada/of-i3dfb4f4f974092893b928ba733897d",
        city: "Oviedo",
    },
    {
        title: "POSITIVE MARKETING",
        link: "https://www.infojobs.net/positive-marketing/em-i968157524526202550523214950852",
        city: "Oviedo",
    }
    ,
    {
        title: "Ingeniero de firmware",
        link: "https://www.infojobs.net/massalfassar/ingeniero-firmware/of-i4819a98f704231ac018c09aa46730b",
        city: "Massalfassar",
    }
  ];

  constructor(private homeService: HomeService) { 

  }

  ngOnInit(): void {
  }

}
