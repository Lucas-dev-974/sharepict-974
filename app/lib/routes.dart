import 'package:flutter/material.dart';
import 'package:app/mespartages.dart';

void main() {
  runApp(Routes());
}

class Routes extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        '/partages': (context) => MesPartages(),
      },
    );
  }
}