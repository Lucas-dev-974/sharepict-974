import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'mespartages.dart';

class AlbumPartage extends StatefulWidget {
  final List<dynamic> mesAlbums;

  AlbumPartage(this.mesAlbums);
  @override
  State<StatefulWidget> createState() {
    return _AlbumPartage();
  }
}

class _AlbumPartage extends State<AlbumPartage> {
  List<dynamic> _albums;

  @override
  void initState() {
    // TODO: implement initState
    // _albums.add(widget.mesAlbums);
    _albums = widget.mesAlbums;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return   Column(

      children:
    _albums.map(
            (item)=>
 Container(
   padding: const EdgeInsets.fromLTRB(100, 10, 100, 10),
   child:
            Row(  mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget> [ Text(
                    item["album"]["name"],

                    style: TextStyle(fontFamily: "DayRoman")),
                  ElevatedButton(onPressed: () {

                    showDialog(context: context, builder: (context){ return Dialog(
                     child: Container(
                       height: 100,
                      child: Column(

                        children: [
                          Text("Voulez-vous supprimer cet album ?"),
                        Text("Album : "+item["album"]["name"]),

                        ElevatedButton(onPressed:  ()async{
                          var uri = Uri.parse('http://127.0.0.1:8080/api/user/abumshared/delete');

                           http.post(uri,    headers: <String, String>{
                            'Content-Type': 'application/json; charset=UTF-8',
                          },body: jsonEncode(<String, int>{
                            'user': item["usersharedId"],
                            "album":item["album"]["id"]
                          }) ).then((value) =>
                          Navigator.push(context, MaterialPageRoute(builder: (context) => MesPartages()))
                          );
                        }, child: Text("supprimer"))
                      ],),
                      )
                    );
                    } );
               }, child: Text("X")) ],
              ),
    )
            ).toList(),
    );
  }
}

class Albums {
  String nom;
}
