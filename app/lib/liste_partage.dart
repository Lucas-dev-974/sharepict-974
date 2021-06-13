import 'dart:convert';


import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:app/users_partage.dart';
import 'addShareUser.dart';
class ListePartage extends StatefulWidget {
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
    _partages = widget.mesPartages;

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    /* return
     ListView.builder( itemCount: _partages.length,itemBuilder: (context,i) {
       return Column(children: [Text(_partages[i]["name"]),AlbumPartage(_partages[i]["albums_users"]) ]);
     });*/
    return
      Container(
       // width: 800,
        alignment: Alignment.center,
        padding: const EdgeInsets.fromLTRB(100, 10, 100, 10),
        child:
      Column(

      crossAxisAlignment: CrossAxisAlignment.center,
      children:[
     // AddShareUser(),
    Column(children:
    _partages.map(
            (item)=>

            Container(
            decoration: BoxDecoration(
            color: Color.fromRGBO(66, 66, 66, 1),
    border: Border.all(
    color: Color.fromRGBO(33, 33, 33, 1),
    width: 1,
    ),
    borderRadius: BorderRadius.circular(12),
    ),
    child:
   ExpansionTile(

     title: Text(item["name"]+" "+item["lastname"], style:TextStyle(fontFamily: "DayRoman",color: Color.fromRGBO(238, 238, 238, 1) )),
     children: <Widget> [

                 Container(
                     width: double.infinity,
                     decoration: const BoxDecoration(
                   border: Border(
                     bottom: BorderSide(width: 1.0, color: Color(0xFF000000)),
                   ),
                 ) ),

                  AlbumPartage(item["albums_shareds"])

                ],



   )
            )
    ).toList(),
    ) ]),
      );
  }
}
