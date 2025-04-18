'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Lock, Mail, User, UserPlus } from 'lucide-react';
import { z } from 'zod';

import kakaoLogo from '@/assets/images/kakao_symbol.svg';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { usePostLogin } from '@/services/member/hooks/usePostLogin';
import { usePostSignup } from '@/services/member/hooks/usePostSignup';
import { MemberSignupDto } from '@/services/member/types';

const formSchema = z.object({
  email: z.string().email({ message: '이메일이 올바르지 않아요.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .regex(/(?=.*[a-zA-Z])/, { message: '비밀번호에 영문자가 최소 1개 포함되어야 합니다.' })
    .regex(/(?=.*\d)/, { message: '비밀번호에 숫자가 최소 1개 포함되어야 합니다.' })
    .regex(/(?=.*[@$!%*?&])/, { message: '비밀번호에 특수문자(@,$,!,%,*,?,&)가 최소 1개 포함되어야 합니다.' })
    .regex(/^[A-Za-z\d@$!%*?&]+$/, { message: '비밀번호에 허용되지 않은 문자가 포함되어 있습니다.' }),
  username: z.string(),
});

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const { mutate: postLogin, isSuccess: isLoginSuccess } = usePostLogin();
  const { mutate: postSignup, isSuccess: isSignupSuccess } = usePostSignup();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const onSubmit = async (data: MemberSignupDto) => {
    try {
      postSignup(data);
    } catch (error) {
      setErrorMessage('회원가입 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (!isSignupSuccess) return;

    postLogin({ email: form.getValues('email'), password: form.getValues('password') });
  }, [isSignupSuccess]);

  useEffect(() => {
    if (!isLoginSuccess) return;
    router.push('/');
  }, [isLoginSuccess]);

  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center py-10">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <UserPlus className="h-6 w-6 text-blue-500" />
            회원가입
          </CardTitle>
          <CardDescription className="text-center">회원가입을 위한 정보를 입력해 주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      <User className="h-4 w-4 text-gray-500" />
                      이름
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="별명을 입력해 주세요." className="pl-10" {...field} />
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-gray-500" />
                      아이디
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="이메일을 입력해 주세요." className="pl-10" {...field} />
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      <Lock className="h-4 w-4 text-gray-500" />
                      비밀번호
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="password" placeholder="비밀번호를 입력해 주세요." className="pl-10" {...field} />
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormDescription className="text-xs">
                      비밀번호는 영문자, 특수문자, 숫자를 포함하여 총 8글자 이상이어야 합니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {errorMessage && (
                <div className="flex items-center justify-center gap-1 rounded-md bg-red-50 p-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col space-y-4">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  회원가입하기
                </Button>

                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="mx-4 flex-shrink text-sm text-gray-400">또는</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  className="bg-kakao flex w-full items-center justify-center gap-8 hover:bg-yellow-300"
                >
                  <Image src={kakaoLogo} alt="카카오 회원가입" width={24} height={24} />
                  <span>카카오 회원가입</span>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center gap-1 border-t border-gray-100 pt-4 text-sm">
          이미 계정이 있으신가요?&nbsp;
          <Link href="/signin" className="font-medium text-blue-600 hover:underline">
            로그인하러 가기
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
