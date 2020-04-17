import 'package:asigar_lp/widgets/about.dart';
import 'package:asigar_lp/widgets/area.dart';
import 'package:asigar_lp/widgets/feature.dart';
import 'package:asigar_lp/widgets/services.dart';
import 'package:asigar_lp/widgets/top.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          child: Column(
            children: <Widget>[
              TopWidget(),
              About(),
              FuturePoint(),
              Services(),
              Area(),
            ],
          ),
        ),
      ),
    );
  }
}
