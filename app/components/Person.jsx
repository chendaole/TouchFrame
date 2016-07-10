import React from 'react';
import { Container , Tabs} from 'amazeui-touch';

const TableData = [
    {
        title: 'test1',
        des: 'dkfdksfkdsfjdskf'
    },
    {
        title: 'test2',
        des: 'dkfdksfkdsfjdskf'
    },
    {
        title: 'test3',
        des: 'dkfdksfkdsfjdskf'
    },
    {
        title: 'test4',
        des: 'dkfdksfkdsfjdskf'
    }
];

export default class Person extends React.Component{
    constructor(props){
        super(props);
    }

    renderTable(){
      const TabsItem = TableData.map((item,i) =>{
         return(
             <Tabs.Item
                 key={i}
                 title = {item.title}>
                 <dvi className="TabsItemDes">
                     { item.des}
                 </dvi>
             </Tabs.Item>
         );
      });
      return TabsItem;

    }

    render(){
        return(
            <div>
                <div>
                    <Tabs noPadded={false} style={{marginTop:0}}>
                        {this.renderTable()}
                    </Tabs>
                </div>
                <div style={{flex:1}}>

                </div>
            </div>
        );
    }
}