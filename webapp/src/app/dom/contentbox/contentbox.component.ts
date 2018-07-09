import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.css']
})
export class ContentboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // mv_metaData :Array<any> = [
  //   [{"a":"1", "b":"2"}],
  //   [{"a":"10", "b":"20"}]
  // ]

  mv_metaData :Array<any> = [
    {"centre_latitude": "0", "centre_longitude": "0", "zoom_level": "0", "map_style": "mapbox://styles/mapbox/outdoors-v9", "bbox_polygon": "[[[-67.13734351262877, 45.137451890638886],[-66.96466, 44.8097],[-68.03252, 44.3252],[-69.06, 43.98],[-70.11617, 43.68405],[-70.64573401557249, 43.090083319667144],[-70.75102474636725, 43.08003225358635],[-70.79761105007827, 43.21973948828747],[-70.98176001655037, 43.36789581966826],[-70.94416541205806, 43.46633942318431],[-71.08482, 45.3052400000002],[-70.6600225491012, 45.46022288673396],[-70.30495378282376, 45.914794623389355],[-70.00014034695016, 46.69317088478567],[-69.23708614772835, 47.44777598732787],[-68.90478084987546, 47.184794623394396],[-68.23430497910454, 47.35462921812177],[-67.79035274928509, 47.066248887716995],[-67.79141211614706, 45.702585354182816],[-67.13734351262877, 45.137451890638886]]]", "mv_title": "a sample video to show what has happened in the past", "mv_location": "Heidelberg", "author_name": "mohammed zia", "tag_1": "history", "tag_2": "null island", "tag_3": "2000years", "mv_views": "1.8M", "created_on": "2 months", "mv_length": "1hour"},

    {"centre_latitude": "0", "centre_longitude": "0", "zoom_level": "2", "map_style": "mapbox://styles/mapbox/dark-v9", "bbox_polygon": "[[[-67.13734351262877, 45.137451890638886],[-66.96466, 44.8097],[-68.03252, 44.3252],[-69.06, 43.98],[-70.11617, 43.68405],[-70.64573401557249, 43.090083319667144],[-70.75102474636725, 43.08003225358635],[-70.79761105007827, 43.21973948828747],[-70.98176001655037, 43.36789581966826],[-70.94416541205806, 43.46633942318431],[-71.08482, 45.3052400000002],[-70.6600225491012, 45.46022288673396],[-70.30495378282376, 45.914794623389355],[-70.00014034695016, 46.69317088478567],[-69.23708614772835, 47.44777598732787],[-68.90478084987546, 47.184794623394396],[-68.23430497910454, 47.35462921812177],[-67.79035274928509, 47.066248887716995],[-67.79141211614706, 45.702585354182816],[-67.13734351262877, 45.137451890638886]]]", "mv_title": "a sample video to show what has happened in the past", "mv_location": "Heidelberg", "author_name": "mohammed zia", "tag_1": "history", "tag_2": "null island", "tag_3": "1900years", "mv_views": "1.8M", "created_on": "2 months", "mv_length": "10min"}

    


    // {"a":"1", "b":"2"},
    // {"a":"10", "b":"20"},
    // {"a":"1", "b":"2"},
    // {"a":"10", "b":"20"},
    // {"a":"1", "b":"2"},
    // {"a":"10", "b":"20"},
    // {"a":"1", "b":"2"},
    // {"a":"10", "b":"20"},
    // {"a":"1", "b":"2"},
    // {"a":"10", "b":"20"},
    // {"a":"1", "b":"2"},
    // {"a":"10", "b":"20"}
  ]
  
}
