import 'package:app/users_partage.dart';
import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

import 'liste_partage.dart';

class MesPartages extends StatefulWidget {
  static String routeName = '/MesPartages';



  @override
  _MesPartages createState() => _MesPartages();
}

class _MesPartages extends State<MesPartages> {
  String url = 'http://localhost:8080/albums';
  String endpoint = "localhost:8080";
  String api = "api/user/abumshared";
  String test;
  List<dynamic>  _data = [];
  List<dynamic> _item=[];


  Future<String> fetchAlbum() async {
    var uri = Uri.http(endpoint, api);
    http.Response response = await http.get(uri);

    return response.body;
  }

   getStringList()  async{
String temp=await fetchAlbum();

_item=json.decode(temp);
setState(() {
  _data=_item[0]["albmus_shareds"];
});

    /* fetchAlbum() .then((value) => {

    ,

     });*/
     print("ok");
    // print(_data);
  }

  @override
  void initState() {
    // TODO: implement initState

    print("init");
    // _data=List.from( getStringList() );_
     getStringList();

print(_data);
print("data");

    super.initState();
//print(_data.runtimeType);
  }

  @override
  Widget build(BuildContext context) {

     // print(_data);
    return Scaffold(
        appBar: AppBar(
          title: Text("Mes partages"),
        ),
        body: Column(children: [ListePartage(_data )]));
  }
}
