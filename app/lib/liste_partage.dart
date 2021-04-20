import 'dart:convert';

import 'package:flutter/material.dart';

import "users_partage.dart";
class ListePartage extends StatefulWidget{
  final List<dynamic> mesPartages;

  ListePartage(this.mesPartages);
  @override
  State<StatefulWidget> createState() {

   return _ListePartage();
  }

}


class _ListePartage extends State<ListePartage> {
   List<dynamic> _partages;

  @override
  void initState() {
    // TODO: implement initState
   // _partages.add(widget.mesPartages);
   _partages=widget.mesPartages;
//print(_partages);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(children:
    _partages.map(
    (item)=>
        Card(
          child:Column(children: [

           Row( children: [  Expanded(flex:2,child:  Text(item["user"]["name"]) ), ElevatedButton(onPressed: (){}, child: Text("X"))])
    ,
            Row(children: [AlbumPartage(item["album_shareds"])],)
          ],)
          )
        ).toList()
    );

  }

}

class Partage{
  String name;
  List<Albums> albums;

  Partage( {this.name,this.albums});

  factory Partage.fromJson(Map<String, dynamic> json) {
    return Partage(
      name: json['name'],
      albums: json['albums_shareds'],
    );
  }

}