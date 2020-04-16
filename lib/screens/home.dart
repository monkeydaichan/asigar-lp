import 'package:asigar_lp/widgets/home.dart';
import 'package:flutter/material.dart';

import 'package:asigar_lp/constants.dart';

class HomePage extends StatelessWidget {
  HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          color: secondaryColor,
          child: Column(
            children: <Widget>[TopWidget()],
          ),
        ),
      ),
    );
  }
}
