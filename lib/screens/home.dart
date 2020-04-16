import 'package:flutter/material.dart';

import '../constants.dart';

class HomePage extends StatelessWidget {
  HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScopeNode currentFocus = FocusScope.of(context);
        if (!currentFocus.hasPrimaryFocus) {
          currentFocus.unfocus();
        }
      },
      child: Scaffold(
        // appBar:
        // AppBar(
        //   centerTitle: true,
        //   backgroundColor: Theme.of(context).primaryColor,
        //   elevation: 0.0,
        //   // title: Text(
        //   //   title,
        //   //   style: Theme.of(context).textTheme.subtitle1,
        //   // ),
        // ),
        body: HomePageBody(),
      ),
    );
  }
}

class HomePageBody extends StatelessWidget {
  HomePageBody({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: SingleChildScrollView(
          child: Column(
        children: <Widget>[
          Container(
            color: Colors.black,
            height: 1000.0,
          ),
          Container(
            color: Colors.blue,
            height: 1000.0,
          ),
        ],
      )),
      color: secondaryColor,
    );
  }
}
