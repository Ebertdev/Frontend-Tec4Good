
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";

export default function CartAndSupport() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black min-h-screen text-white">
      {/* Cart */}
      <Card className="bg-[#111]">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Seu carrinho tem 1 item</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/samsung-display.png"
              alt="Display Samsung S20"
              className="w-16 h-16 object-cover border"
            />
            <div className="flex-1">
              <p>Display Samsung S20</p>
              <p className="text-lg font-bold">R$ 990,90</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Minus className="w-4 h-4" />
              </Button>
              <span>1</span>
              <Button variant="outline" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Total:</span>
            <span className="text-lg font-bold">R$ 990,90</span>
          </div>
          <div className="mb-4 text-blue-400 cursor-pointer">Adicionar cupom</div>
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            FINALIZAR REVENDA
          </Button>
        </CardContent>
      </Card>

      {/* Support Chat */}
      <Card className="bg-[#111]">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/support-avatar.png"
              alt="Suporte"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Suporte Tech4Good</p>
              <p className="text-green-400 text-sm">Online</p>
            </div>
          </div>
          <div className="flex-1 overflow-auto space-y-2 mb-4">
            <div className="text-sm text-gray-400">Cecilia • 11:30</div>
            <div className="bg-blue-500 p-2 rounded-xl w-fit max-w-[75%]">
              Olá, sou Tamara, do suporte da Tech4Good, como posso ajudar? 🧑‍💻
            </div>
            <div className="text-sm text-gray-400 self-end text-right">Você • 11:32</div>
            <div className="bg-white text-black p-2 rounded-xl self-end w-fit max-w-[75%]">
              Olá, gostaria de saber o status do meu aparelho!
            </div>
            <div className="text-sm text-gray-400">Cecilia • 11:34</div>
            <div className="bg-blue-500 p-2 rounded-xl w-fit max-w-[75%]">
              O seu aparelho se encontra em manutenção ainda...
            </div>
            <div className="text-sm text-gray-400 self-end text-right">Você • 11:36</div>
            <div className="bg-white text-black p-2 rounded-xl self-end w-fit max-w-[75%]">
              Obrigado!
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Digite sua mensagem" className="flex-1 bg-[#222] text-white" />
            <Button className="bg-blue-500 hover:bg-blue-600">➤</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
