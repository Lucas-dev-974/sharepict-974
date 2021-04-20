import 'package:flutter/material.dart';

class AlbumPartage extends StatefulWidget{
  final List mesAlbums;

  AlbumPartage(this.mesAlbums);
  @override
  State<StatefulWidget> createState() {

    return _AlbumPartage();
  }

}


class _AlbumPartage extends State<AlbumPartage> {
   List _albums=[];

  @override
  void initState() {
    // TODO: implement initState
   // _albums.add(widget.mesAlbums);
    _albums=List.from(widget.mesAlbums);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(children:
    _albums.map(
            (item)=>
            Card(
              child: Row( mainAxisAlignment: MainAxisAlignment.spaceAround,
                children:  [Text(item,style: TextStyle(fontFamily: "DayRoman")), ElevatedButton(onPressed: (){}, child: Text("X"))],
              ),

            )).toList(),
    );
  }

}

class Albums{
  String nom;
}