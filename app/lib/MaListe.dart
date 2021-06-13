
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class MaListe extends StatefulWidget{

  final List<dynamic> maListe;
  final List<dynamic> user;
  MaListe(this.maListe,this.user);
  @override
  State<StatefulWidget> createState() {
    return _MaListe();
  }
}

class _MaListe extends State<MaListe>{

  List<dynamic> _partages;
  List<dynamic> _user;
  @override
  void initState() {
    // TODO: implement initState
    // _partages.add(widget.mesPartages);
    _partages = widget.maListe;
    _user = widget.user;

    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return Column(
        children:[
          Text(_user[0]["name"]+" "+_user[0]["lastname"]),
          Row(children:_partages.map( (e) =>

            Container(padding: const EdgeInsets.fromLTRB(100, 10, 100, 10), child:
            Column(  children: [ Container(width:200,child :Image.asset("assets/water.jpg")),  Text(e["album"]["name"]) ],)


            )
        ).toList()
        )]
    );

  }
  }