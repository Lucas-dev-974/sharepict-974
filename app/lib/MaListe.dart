import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class MaListe extends StatefulWidget{

  final List<dynamic> maListe;

  MaListe(this.maListe);
  @override
  State<StatefulWidget> createState() {
    return _MaListe();
  }
}

class _MaListe extends State<MaListe>{

  List<dynamic> _partages;

  @override
  void initState() {
    // TODO: implement initState
    // _partages.add(widget.mesPartages);
    _partages = widget.maListe;

    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return Row(
        children:[ Row(children:_partages.map( (e) =>

            Container(padding: const EdgeInsets.fromLTRB(100, 10, 100, 10), child:
            Column(  children: [ Container(width:200,child :Image.asset("assets/water.jpg")),  Text(e["album"]["name"]) ],)


            )
         ).toList()
        )]
    );


  }
  }
