

import javax.swing.JOptionPane;


public class Calculadora_IMC {
	
	public static void main(String[] args) {
		
		double peso = 0, altura = 0;
		
		try {
			String entrada1 = JOptionPane.showInputDialog("Informe o seu Peso em (Kg): \nExemplo: 74.50 (utilize ponto)");
			if (entrada1 != null)
				peso = Double.parseDouble(entrada1);
				String entrada2 = JOptionPane.showInputDialog("Informe a sua altura em (cm): \nExemplo: 175");
				if (entrada2 != null)
					altura = Double.parseDouble(entrada2);
					calcula_imc(peso, altura/100);
		} catch (Exception e) {
			JOptionPane.showMessageDialog(null, "Ocorreu um erro no programa! \nErro: " + e, "Erro", 0);
		}
	}
	
	public static void calcula_imc(double peso, double altura) {
		double imc = peso / (altura * altura);
		processa_mensagem(imc);
	}

	public static void processa_mensagem(double valor) {
		
		double imc = valor;
		
		if (imc < 17.00)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Muito abaixo do peso!", "Resultado", 1);
		else if (imc >= 17.00 && imc <= 18.49)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Abaixo do peso!", "Resultado", 1);
		else if (imc >= 18.50 && imc <= 24.99)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Peso normal!", "Resultado", 1);
		else if (imc >= 25.00 && imc <= 29.99)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Acima do peso!", "Resultado", 1);
		else if (imc >= 30.00 && imc <= 34.99)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Obesidade I!", "Resultado", 1);
		else if (imc >= 35.00 && imc <= 39.99)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Obesidade II (severa)!", "Resultado", 1);
		else if (imc >= 40.00)
			JOptionPane.showMessageDialog(null, "IMC: [" + String.format("%.2f", imc) + "]"
					+ "\nSituação: Obesidade III (mórbida)!", "Resultado", 1);
		else
			JOptionPane.showMessageDialog(null, "Valores informados inválidos!", "Erro", 0);
	}

}