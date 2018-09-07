import React, { Component } from 'react';
import './App.css';
import {Validator} from 'jsonschema';
import JSONData from './JSONData';

class App extends Component {

  formschema = {
  "id": "/Simpleform",
  "type": "object",
  "$schema": "mmmm",
  "properties": {

    "title": { "type": "string" },

    "action": { "type": "string" },

    "formfields": {
      "type": "Array",
      "items": {

        "anyOf": [
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "text"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "size": { "type": "number" },
                  "maxlength": { "type": "number" },
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "placeholder": { "type": "string" },
                  "pattern": { "type": "string" },
                  "title": { "type": "string" },
                  "value": { "type": "string" }
                },
                "additionalProperties": false
              }
            },
            "required": ["name", "label", "id"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "number",
                  "range",
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "size": { "type": "number" },
                  "maxlength": { "type": "number" },
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "min": { "type": "number" },
                  "max": { "type": "number" },
                  "value": { "type": "string" },
                  "additionalProperties": false
                }
              }
            },
            "required": ["name", "label", "id"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "email"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "size": { "type": "number" },
                  "maxlength": { "type": "number" },
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "placeholder": { "type": "string" },
                  "pattern": { "type": "string" },
                  "mutiple": { "type": "boolean" },
                  "value": { "type": "string" },
                  "additionalProperties": false
                }
              }
            },
            "required": ["name", "label", "id"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "radio"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "additionalProperties": false
                }
              },
              "options": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string" },
                    "value": { "type": "string" }
                  },
                },
                "minItems": 2,
                "additionalProperties": false
              }
            },
            "required": ["name", "label", "id", "options"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "select"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "multiple": { "type": "boolean" },
                  "size": { "type": "integer", "minimum": 1 }
                }
              },
              "options": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string" },
                    "value": { "type": "string" }
                  }
                },
                "minItems": 1,
              }
            },
            "required": ["name", "label", "id", "options"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "textarea"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "size": { "type": "number" },
                  "maxlength": { "type": "number" },
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "placeholder": { "type": "string" },
                  "rows": { "type": "integer", "min": 0 },
                  "cols": { "type": "integer", "min": 0 },
                  "value": { "type": "string" },
                  "additionalProperties": false
                }
              }
            },
            "required": ["name", "label", "id"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "file"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "size": { "type": "number" },
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "placeholder": { "type": "string" },
                  "value": { "type": "string" },
                  "multiple": { "type": "boolean" }
                }
              }
            },
            "required": ["name", "label", "id"],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "inputtype": {
                "type": "string",
                "enum": [
                  "checkbox"
                ]
              },
              "name": { "type": "string" },
              "label": { "type": "string" },
              "id": { "type": "string" },
              "properties": {
                "type": "object",
                "properties": {
                  "disabled": { "type": "boolean" },
                  "required": { "type": "boolean" },
                  "checked": { "type": "boolean" },
                  "additionalProperties": false
                }
              }
            },
            "required": ["name", "label", "id"],
            "additionalProperties": false
          },

        ]

      },
      "minItems": 1,
    },
    "required": ["title"]
  }

};

  state={

    stringRep:'{"title":"A sample form build using JSON","action":"/action","formfields":[{"id":"1","inputtype":"text","name":"firstname","label":"Enter your name:","properties":{"placeholder":"Midhun LC","title":"filed to enter your name","required":true,"disabled":false}},{"id":"34","inputtype":"text","name":"firstname","label":"Enter your name:","properties":{"placeholder":"Midhun LC","title":"filed to enter your name","required":true,"disabled":false}},{"id":"2","inputtype":"number","name":"age","label":"Enter your age:","properties":{"required":true,"disabled":false,"min":0,"max":50}},{"id":"23","inputtype":"email","name":"email","label":"Enter your email:","properties":{"required":true,"disabled":false}},{"id":"45","inputtype":"textarea","name":"description","label":"Enter a few lines about yourselves:","properties":{"required":true,"disabled":false,"rows":10,"cols":50,"placeholder":"few lines about self"}},{"id":"3","inputtype":"radio","name":"Sex","label":"Sex","options":[{"name":"Male","value":"male"},{"name":"Female","value":"female"},{"name":"Other","value":"other"}],"properties":{"required":true}},{"id":"6","inputtype":"select","name":"select","label":"Select an option from the drop down","options":[{"name":"a","value":"a"},{"name":"b","value":"b"},{"name":"c","value":"c"}],"properties":{"multiple":true,"size":3}}]}',
    formData:{

      title:"A sample form build using JSON",
      action:"/action",
      formfields:[
        {
          id: "1",
          inputtype: "text",
          name: "firstname",
          label: "Enter your name:",
          properties: {
            placeholder: "Midhun LC",
            title: "filed to enter your name",
            required: true,
            disabled: false,
          },
        },
        {
          id: "34",
          inputtype: "text",
          name: "firstname",
          label: "Enter your name:",
          properties: {
            placeholder: "Midhun LC",
            title: "filed to enter your name",
            required: true,
            disabled: false,
          },
        },

        {
          id: "2",
          inputtype: "number",
          name: "age",
          label: "Enter your age:",
          properties: {
            required: true,
            disabled: false,
            min: 0,
            max: 50
          }
        },

        {
          id: "23",
          inputtype: "email",
          name: "email",
          label: "Enter your email:",
          properties: {
            required: true,
            disabled: false,
          }
        },

        {
          id: "45",
          inputtype: "textarea",
          name: "description",
          label: "Enter a few lines about yourselves:",
          properties: {
            required: true,
            disabled: false,
            rows: 10,
            cols: 50,
            placeholder: "few lines about self",
          }
        },

        {
          id: "3",
          inputtype: "radio",
          name: "Sex",
          label: "Sex",
          options: [
            {
              name: "Male",
              value: "male"
            },
            {
              name: "Female",
              value: "female"
            },
            {
              name: "Other",
              value: "other"
            }
          ],
          properties: {
            required: true
          }
        },

        {
          id: "6",
          inputtype: "select",
          name: "select",
          label: "Select an option from the drop down",
          options: [
            {
              name: "a",
              value: "a"
            },
            {
              name: "b",
              value: "b"
            },
            {
              name: "c",
              value: "c"
            }
          ],
          properties: {
            multiple: true,
            size: 3
          },

        }
      ] 
    }
  }

  generateFormElement=(x)=>{

    if(x.inputtype==='select')
    {
      return <select name={x.name} {...x.validations} {...x.properties}>{x.options.map(y => <option value={y.value} key={y.value}>{y.name}</option>)} </select>
    }
    if(x.inputtype==='radio')
    {
      return x.options.map(y => { return (<div key={y.name + Math.random()} ><input type={x.inputtype} name={x.name} value={y.value}{...y.properties}/>{y.name}</div>)})
    }
    if(x.inputtype==="textarea"){
      return <textarea name={x.name} {...x.validations} {...x.properties}/>
    }
    return (
      <input type={x.inputtype} name={x.name} {...x.validations} {...x.properties} />
    )
  }

  validateSchema=()=>{
    var v = new Validator();
    var instance = this.state.formData;

    return v.validate(instance, this.formschema).errors.length;
  }

  onEditJSON=(event)=>{
    var json =event.target.value;
    this.setState({
      stringRep:json
    })
  }

  validateUserInput=()=>{
    var parsedJSON=null;
    try {
      parsedJSON=JSON.parse(this.state.stringRep);
      try{
        var v = new Validator();
        if(v.validate(parsedJSON, this.formschema).errors.length===0){
          this.setState({
            formData: parsedJSON
          })
        }
        else{
          alert("JSON schema validation failed.UI cannot be updated");
        }
        
      }
      catch(e){
      }
    }
    catch (SyntaxError) {
      alert("Please enter valid JSON");
    }
  }

  generateform=()=>{
    var formBody=null;
    if (this.validateSchema() === 0) {
      formBody = this.state.formData.formfields.map(x => {
        return (
          <div key={x.id} className="row">
            <div className="column">
              <label>{x.label}</label>
            </div>
            <div className="column">
              {this.generateFormElement(x)}
            </div>
          </div>

        )
      })
      formBody.push(<input key={Math.random()} type="submit" name="Submit" onSubmit={this.onSubmit} />);
    }
    else {
      formBody = "FormData could not be processed from backend for form generation.Please check the JSON and schema"
    }

    return formBody;
  }

  render() {

    var formBody=this.generateform();
    return (
      <div className="App">
        <h3>{this.state.formData.title}</h3>
        <form>
          {formBody}
        </form>
        <hr/>
        <JSONData json={this.state.stringRep} edit={this.onEditJSON} validate={this.validateUserInput}/>
      </div>
    );
  }
}

export default App;
