package com.example.prova_3a1_37

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val quantDias = findViewById<EditText>(R.id.quantDia)
        val valordia = findViewById<EditText>(R.id.ValorDia)
        val valorHora = findViewById<EditText>(R.id.valorHora)
        val calcular = findViewById<Button>(R.id.btnCalcular)
        val vlrResul = findViewById<TextView>(R.id.numSalario)

        calcular.setOnClickListener {
            val qtDias = quantDias.text.toString().toFloat()
            val vlrDia = valordia.text.toString().toFloat()
            val vlrHora = valorHora.text.toString().toFloat()


            val resultado = qtDias * vlrHora * vlrDia

            vlrResul.setText(resultado.toString())
        }
    }
    }
